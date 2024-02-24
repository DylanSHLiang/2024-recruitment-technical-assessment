from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    isLeaf = {}
    for file in files:
        isLeaf[file.id] = True if file.id not in isLeaf else isLeaf[file.id]
        isLeaf[file.parent] = False
    return [file.name for file in files if isLeaf[file.id]]


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    categories = {}
    for file in files:
        for category in file.categories:
            categories[category] = 1 + categories.get(category, 0)
    categories = sorted(sorted(categories.items(), key=lambda x : x[0]), key=lambda x:x[1], reverse=True)
    categories = categories[:k]
    return [x[0] for x in categories]


"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    sizes = {}
    trees = {}
    for file in files:
        if file.parent not in trees:
            trees[file.parent] = []
        trees[file.parent].append(file.id)
        sizes[file.id] = file.size
    
    largest = 0
    for root in trees[-1]:
        size = getSize(root, trees, sizes)
        if size > largest:
            largest = size
    return largest

def getSize(node, trees, sizes):
    size = 0
    if node in trees:
        for child in trees[node]:
            size += getSize(child, trees, sizes)
    size += sizes[node]
    return size


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
