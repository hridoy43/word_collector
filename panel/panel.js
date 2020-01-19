
//insert Dict data into div
(async () => {
    let localItel = await browser.storage.local.get();
    console.log('Log: localItel', localItel);
    DicData = Object.keys(localItel).map(item => ` ${item}`);

    document.querySelector('#dicData').innerHTML = DicData.toString();

    const downloadCSV = () => {
        console.log("Download Button Clicked!");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    var uri = "data:text/csv;charset=utf-16," + DicData.toString();

    var downloadLink = document.createElement("a");
    downloadLink.href = uri;
    downloadLink.download = "data.csv";



    document.querySelector('#dButton').addEventListener('click', downloadCSV);


})()
