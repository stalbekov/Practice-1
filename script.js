container.onclick = (event)=>{
    if (event.target.className != 'delete')
        return;
    let vkladki = event.target.closest(".vkladki");
    vkladki.remove();
}