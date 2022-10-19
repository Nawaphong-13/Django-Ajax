console.log('hello world')

const helloWorldBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')



$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(res){
        console.log('success', res.text)
        helloWorldBox.innerHTML = res.text
    },
    error: function(err){
        console.log('error', err)
    }
})


$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(res){
        const data = res.data
        console.log(data)
        data.forEach(el => {
            postsBox.innerHTML += `
                ${el.title} - <b>${el.body}</b><br>    
            `
        });
    },
    error: function(err){
        console.log('error', err)
    }
})