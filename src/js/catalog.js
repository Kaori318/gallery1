class Gallery {
constructor(container = '.media'){
    this.container = container;
    this.file_list = [];
    this.fetch_gellery();
    this.render();
}
fetch_gellery(){
    this.file_list = [
        { type: 'img', description: 'Мельница у реки', media: '1.jpg' },
        { type: 'img', description: 'Горы осенью', media: '2.jpg' },
        { type: 'img', description: 'Деревня летом', media: '3.jpg' },
        { type: 'img', description: 'Анимированный котик', media: '4.gif' },
        { type: 'audio', description: 'Птички летом', media: '1.mp3' },
        { type: 'audio', description: 'Ручеек в ущелье', media: '2.mp3' },
        { type: 'audio', description: 'Закат в лесу', media: '3.mp3' },
        { type: 'video', description: 'Never Gonna Give You Up', media: '1.mp4' },
        { type: 'video', description: 'Морской прибой', media: '2.mp4' }
    ]
}
render(){
    console.log(this.file_list)
const block = document.querySelector(this.container);
    for(let file of this.file_list){
        const item = new GalleryItem(file);
        block.insertAdjacentHTML("beforeend",item.render());
    }
}
} 

class GalleryItem{
    constructor(file){
        this.type = file.type;
        this.description = file.description;
        this.media = file.media;
    }
    render(){
        console.log(this.type)
        if(this.type == "img"){
        return `
        <div class="gallery_item">
            <div class="gallery_item__media">
                <img src="../images/${this.media}">
            </div>
            <div class="description">
                ${this.description}
            </div>
        </div>`
        }
        else if(this.type == "audio"){
            return `
            <div class="gallery_item">
                <div class="gallery_item__media">
                    <audio src="../audio/${this.media}" controls></audio>
                </div>
                <div class="description">
                    ${this.description}
                </div>
            </div>`
        }
        else if(this.type == "video"){
            return `
            <div class="gallery_item">
                <div class="gallery_item__media">
                    <video src="../video/${this.media}" controls></video>
                </div>
                <div class="description">
                    ${this.description}
                </div>
            </div>`
            }
        }
    }

console.log('Hello!')
let gallery = new Gallery();