import sys
import json

def myfunction():
    data = {
        "key1": "value1",
        "key2": "value2",
    }
    return json.dumps(data)

# def my_python:
#     return "Hello World"

# response = my_python()
# print(response)
sys.stdout.write(myfunction())
