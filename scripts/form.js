const scriptURL = 'https://script.google.com/macros/s/AKfycbxnetNBcMEkSTc_nbToI1CDjuMC6MxyZ0gePnFIX0WtVu7uR0ugOqP5tjbhcLl0DAMg/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            console.log('Success!', response);
            msg.innerHTML="Message sent successfully!"
            setTimeout(function(){
              msg.innerHTML=""
            },5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })