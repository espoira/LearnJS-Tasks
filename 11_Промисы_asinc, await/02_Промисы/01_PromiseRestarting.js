let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1,

//так как учитывается только первый вызов reject/resolve, а все дальнейшие вызовы игнорируются.