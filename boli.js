> 应用名称：玻璃
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-8-14
> 特别说明：本脚本仅供群友学习交流使用，禁止转载售卖
          
[rewrite_local]
  
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/hnkks/Quantumult-X/main/boli.js

[mitm] 

hostname = *.biliapi.*, *.bilibili.*

***********************************/

var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'Buvid=Y8407682B61BAAC14CD394C0DD0885861B4A; _uuid=931A3DDB-48BA-9921-2706-F3B704D4204D44107infoc; buvid3=7D166065-3125-410B-8D58-1A1329AAAB3636713infoc; buvid4=1164491A-2049-AAD2-40FB-FC900F58488445001-023081223-HNYvTHSPdBRhBLvW8VyAvSTZAtudTdDPcwhtp6wJR%2Fjftl4g3cRWkw%3D%3D; DedeUserID=455653269; DedeUserID__ckMd5=8c88b9029bd46c36; SESSDATA=ead6b53e%2C1707405464%2C63568681hHGTP2IgaNEyEYYhO-GMMvqbqyydJqDQZjZM_WgDDJUapHe7hzHYRFGNvURmioozwjuf7wAARQA; bili_jct=2f25d51c4653ebe79200ec9b570813bc; sid=q8lv7j32';
modifiedHeaders['x-bili-device-bin'] = 'CAEQhOj\/IRokWTg0MDc2ODJCNjFCQUFDMTRDRDM5NEMwREQwODg1ODYxQjRBIgZpcGhvbmUqA2lvczIDcGFkOgVhcHBsZUIFQXBwbGVKB2lQYWQgOUdSBDE2LjZqBjcuMTMuMHJANTlBNTc0Q0QwNzExQkVDQ0M5NUFENTA5MkQ2NDg1N0IyMDIzMDQxNDE4NDgxMUEwRTI4QkM1RkVCMjMwQzVCNniW+snSnjE=';
modifiedHeaders['Authorization'] = 'identify_v1 f65a775b9dce1c4489eaaca1718df281hHGTP2IgaNEyEYYhO-GMMvqbqyydJqDQZjZM_WgDDJUapHe7hzHYRFGNvURmioozwjuf7wAARQA';
modifiedHeaders['User-Agent'] = 'bili-universal\/71300100 os\/ios model\/iPad 9G mobi_app\/iphone osVer\/16.6 network\/2';
modifiedHeaders['buvid'] = 'Y8407682B61BAAC14CD394C0DD0885861B4A';
modifiedHeaders['x-bili-metadata-bin'] = 'CmtmNjVhNzc1YjlkY2UxYzQ0ODllYWFjYTE3MThkZjI4MWhIR1RQMklnYU5FeUVZWWhPLUdNTXZxYnF5eWRKcURRWmpaTV9XZ0RESlVhcEhlN2h6SFlSRkdOdlVSbWlvb3p3anVmN3dBQVJRQRIGaXBob25lGgNwYWQghOj\/ISoFYXBwbGUyJFk4NDA3NjgyQjYxQkFBQzE0Q0QzOTRDMEREMDg4NTg2MUI0QToDaW9z';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaEGZmZmZmZmZmMTczZTRlN2Q=';
modifiedHeaders['x-bili-trace-id'] = '24d5affd8faa9df04a4de0fbfbd09cba:4a4de0fbfbd09cba:0:0';
$done({'headers': modifiedHeaders});
