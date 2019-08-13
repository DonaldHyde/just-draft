let SERVER_DATA = {
    "get": {
        "projects": [
            {
                "name": "My First Novel",
                "id": "12345",
                "created_at": "Mon Aug 1 2019 21:57:47 GMT-0400 (Eastern Daylight Time)"
            },
            {
                "name": "NaNoWriMo",
                "id": "67890",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)"
            }
        ],
        "projectFiles": [
            {
                "name": "Chapter One",
                "projectId": "12345",
                "id": "abcde",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",
                "word_count": 1200,
                "asset_url": "aws/folder/file1.txt"
            },
            {
                "name": "Chapter Two",
                "projectId": "12345",
                "id": "fghij",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",
                "word_count": 1030,
                "asset_url": "aws/folder/file2.txt"
            },
            {
                "name": "Chapter Three",
                "projectId": "12345",
                "id": "klmno",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",
                "word_count": 1200,
                "asset_url": "aws/folder/file3.txt"
            },
            {
                "name": "Chapter Four",
                "projectId": "12345",
                "id": "pqrst",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",
                "word_count": 1030,
                "asset_url": "aws/folder/file4.txt"
            },
            {
                "name": "Day One",
                "projectId": "67890",
                "id": "easy123",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",
                "word_count": 1200,
                "asset_url": "aws/folder/file5.txt"
            },
            {
                "name": "Day Two",
                "projectId": "67890",
                "id": "hard456",
                "created_at": "Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",
                "word_count": 1030,
                "asset_url": "aws/folder/file6.txt"
            }
        ],
        "files": {
            "aws/folder/file1.txt": {
                "content": "Once upon a time in a large forbidden forest."
            },
            "aws/folder/file2.txt": {
                "content": "The brave knight set out on his quest to rescue the fair princess."
            },
            "aws/folder/file3.txt": {
                "content": "The battle was fierce, and the knight did not come out unwounded, but slay the great beast, he did."
            },
            "aws/folder/file4.txt": {
                "content": "So the knight and the princess were wed, and the kingdom prospered, and the couple lived contentedly thereafter."
            },
            "aws/folder/file5.txt": {
                "content": "OMG I'm writing so much today--gotta get my word counts in!"
            },
            "aws/folder/file6.txt": {
                "content": "Day two is far harder than day one. I'm already tired and want to quit. Oh, bother."
            }
        }
    }
}

export { SERVER_DATA }
