const user_ipt = document.querySelector(".user_ipt_area");
const task_area = document.querySelector("#tasks_main_area")
const sub_form = document.querySelector("#custom_submit")
const custom_sort_btn = document.querySelector('#sort-button')
const drop_area= document.querySelector('.drop_area')
let backup = [];
drop_area.style.display = 'none'

sub_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ipt_data = user_ipt.value;
    if (ipt_data) {
        user_ipt.value = ''
        backup.push({
            value: ipt_data,
            id: backup.length + 1
        })
    add_task();
        return
    }
    alert('Fill the gap...!')

})


const add_task = () => {
    task_area.innerHTML = '';
    backup.map(item => {
        const li = document.createElement('li');
        const delButton = document.createElement('img')
        delButton.className = 'imgx';
        const span = document.createElement('span')
        span.className = 'spanList';
        delButton.id = `del-${item.id}`
        delButton.addEventListener('click', () => {
            deleteList(item.id)
        })
        span.innerHTML = item.value
        li.appendChild(span);
        delButton.src = './assets/image/grayx.svg'
        li.appendChild(delButton)
        task_area.appendChild(li)
        li.ondragstart = () => {
            drop_area.style.display = 'block'
        }
        drop_area.addEventListener('dragover', (e) => {
            e.preventDefault()
        })
        function drop() {
            deleteList(item.id)
            drop_area.style.display = 'none'
        }
        drop_area.ondrop = drop;

    })
}

const deleteList = (id) => {
    backup = backup.filter(item => item.id !== id)
    add_task();
}

function compare(a, b) {
    if (a.value < b.value) {
        return -1
    }
    if (a.value > b.value) {
        return 1
    }
    return 0
}

let checkIcon = true

custom_sort_btn.addEventListener('click', () => {
    backup = backup.sort(compare)
    if (checkIcon) {
        custom_sort_btn.src = './assets/image/blackhigh.svg'
        checkIcon = false

    } else {
        custom_sort_btn.src = './assets/image/blackdown.svg'
        checkIcon = true
        backup = backup.reverse()
    }
    add_task()
})






// animation


var cointween1 = TweenMax.staggerFrom('.coins1', 0.3,{
    y:-100,
    delay:0,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.1);
  
  var cointween2 = TweenMax.staggerFrom('.coins2', 0.3,{
    y:-100,
    delay:0.5,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.2);
  
  var cointween3 = TweenMax.staggerFrom('.coins3', 0.3,{
    y:-100,
    delay:0.6,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.2);
  
  var cointween4 = TweenMax.staggerFrom('.coins4', 0.2,{
    y:-100,
    delay:0.8,
    ease: Bounce.easeOut,
    opacity:0
  }, 0.1);
  
  var coinsShadows= TweenMax.staggerFrom('.st0', 0.2,{
    scale:0,
    delay:0.4,
    transformOrigin: "50% 50%"
  },0.1);
  