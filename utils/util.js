export function request(url, data, method= "GET", header = {
  'Content-Type': 'application/json',
  'Authorization': uni.getStorageSync('token')
}) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: url,
      data: data,
      method: method,
      header,
      success: function (res) {
		if(res.statusCode==200){
          resolve(res);
		}
        
      },
      fail: function (err) {
        reject(err)
      }
    })
  });
}