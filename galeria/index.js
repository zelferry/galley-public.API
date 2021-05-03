let axios = require('axios');

function Decrypt(value)
{
  var result="";
  var array = value.split("-");

  for(i=0;i<array.length;i++)
  {
    result+=String.fromCharCode(array[i]-10);
  }
  return result;
} 

let likres = Decrypt("114-126-126-122-125-68-57-57-113-107-118-118-111-131-56-132-111-118-112-111-124-124-131-56-124-111-122-118-56-109-121-57-107-122-115-57-128-60-57-116-125-121-120-57-115-119-107-113-111-125")

class galeria {
  constructor() {
    this.ai = axios.get
  }
  async getdatabase() {
    let data3 = await this.ai(likres)
    return data3.data
  }
  async rand() {
    let data2 = await this.ai(likres)
    let im = data2.data.all
    let images = im.map((x)=>x.link)
    const result = images[Math.floor(Math.random() * images.length)]
    return result
  }
  async json(input){
    let list = []

    if(!input || input == 0){
      input = 1
    }
    for(let i = 0; i < input; i++){
        let code = "";
        for(let e = 0; e < 1; e++){
            let data2 = await this.ai(likres)
            let im = data2.data.all
            let images = im.map((x)=>x.link)
            const result = images[Math.floor(Math.random() * images.length)]
            code += result
        }
        list.push(`${code}`)
    }
    return list
  }
}

module.exports = galeria;
