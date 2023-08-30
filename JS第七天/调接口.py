import requests
import json

url = "https://wukong2.tingyun.com/app-api/overview/performance-list"

payload = json.dumps({
  "timePeriod": 884,
  "endTime": "2023-08-09 14:43:03"
})
headers = {
  'authorization': 'token 521ff38c4cb1a67fb3094e1f157c62a626f73c74d0cba590ecccaaedfa87f38c73f1bc3f143b58d7942675f1c06f6282731e45eae8622848792a1dec1863a8e9',
  'content-type': 'application/json',
  'Cookie': 'wk_api_gateway_release_uid=29f028c8a6afc1604b5cb8479f13089364f4fc7a'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
