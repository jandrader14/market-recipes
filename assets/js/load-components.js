document.addEventListener('DOMContentLoaded', () => {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    //fetch('/components/aside.html')
     //   .then(response => response.text())
     //   .then(data => {
      //      document.getElementById('aside-placeholder').innerHTML = data;
      //  });
});