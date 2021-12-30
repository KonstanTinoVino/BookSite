from pydblite.pydblite import Base
import json


def create_json(records):
    json_list = []
    for key in records:
        json_element = {}
        for value in records[key]:
            json_element[value] = records[key][value]
        json_list.append(json_element)

    final_json = {"books": json_list}
    json_string = json.dumps(final_json, indent=4)
    print(json_string)
    return json_string
