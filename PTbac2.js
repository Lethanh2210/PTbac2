// let n = document.getElementById('result');
// n.addEventListener('click', cal);
function cal(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let x1,x2,x;
    let d;
    let kq = document.getElementById('kq');

    if(a==0){
        if(b==0 && c==0){
            kq.innerHTML = 'Vo so nghiem';
        }else if(b==0 && c!=0){
            kq.innerHTML = 'vo nghiem';
        }else {
            x = -c/b;
            kq.innerHTML = x;
        }
    }else {
        d = (b * b) - (4 * a * c);

        if(d < 0){
            kq.innerHTML = 'vo nghiem';
        }else if (d == 0){
            x1 = x2 = (-b)/(2*a);
            kq.innerHTML = 'x1 = x2 = ' + x1;
        }else{
            x1 = (-b + Math.sqrt(d))/(2*a);
            x2 = (-b - Math.sqrt(d))/(2*a);
            kq.innerHTML = 'x1 = ' + x1 + ' x2 = ' + x2;
        }
    }
}