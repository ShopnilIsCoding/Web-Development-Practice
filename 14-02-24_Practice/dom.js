let count = 0
document.getElementById("Post").addEventListener('click', function () {


    const commentbox = document.getElementById('comment');
    const namebox = document.getElementById('name');
    if (commentbox.value === '' || namebox.value === '') {
        alert("Fill Both Box");
        return;
    }
    const comment = '<span style="font-weight: bold;">Customer ' + (++count) + '</span> ' + '<span style="font-weight: bold; color: tomato;">'+  namebox.value + '</span> Commented: <span style="color: blueviolet;">' + commentbox.value + '</span>';

    const textbox = document.getElementById('text');
    const p = document.createElement('p');
    p.innerHTML = comment;
    p.classList.add('pr');
    
    
    textbox.appendChild(p);
    commentbox.value = '';
    namebox.value = '';
})