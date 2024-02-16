from dataclasses import dataclass
import heapq
import collections

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
    leaf_count = {}

    for file in files:
        if file.parent != -1:
            leaf_count[file.parent] = 0
    
    leaves = []
    for file in files:
        if file.id not in leaf_count:
            leaves.append(file.name)
        
    return leaves


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    category_freq = collections.Counter()

    for file in files:
        for cat in file.categories:
            category_freq[cat] += 1

    # Create a list of tuples with the category frequency inverted.
    tuples = [(-value, key) for key, value in category_freq.items()]

    # Transform the tuples list into a priority queue, with those categories associated with the most files having
    # the highest priority.
    heapq.heapify(tuples) # O(n) operation.

    categories = []
    for _ in range(k):
        tuple = heapq.heappop(tuples)
        categories.append(tuple[1])

    return categories

    # Cost Analysis:
    # Counting frequency of all categories in each file is O(nm) where m is the number of categories and
    # n is the number of files. Heapifying the tuples list is O(n), and then popping the k largest categories
    # is O(mlogn), since we pop from the heap at most m many times. Counting frequencies dominates popping
    # from the priority queue, hence overall time complexity is O(nm).

"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    # Create a mapping of all files.
    file_map = {}
    for file in files:
        file_map[file.id] = file

    # Obtain all leaf file ids.
    leaf_count = {}

    for file in files:
        if file.parent != -1:
            leaf_count[file.parent] = 0
    
    leaves_id = []
    for file in files:
        if file.id not in leaf_count:
            leaves_id.append(file.id)

    # Traverse upwards from each leaf file and add the leaf file's size onto each node until
    # we reach the root.
    for leaf in leaves_id:
        curr = leaf
        while curr != -1:
            if file_map[curr].parent != -1:
                file_map[file_map[curr].parent].size += file_map[leaf].size
            curr = file_map[curr].parent

    largest = 0
    for val in file_map.values():
        largest = max(largest, val.size)

    return largest

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

    testFiles2 = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
    ]

    testFiles3 = [
        File(1, "Document.txt", ["Documents"], -1, 2),
        File(2, "Image.jpg", ["Media", "Photos"], 1, 4),
        File(3, "Folder", ["Folder"], 2, 3),
        File(4, "Folder", ["Folder"], 2, 1),
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
