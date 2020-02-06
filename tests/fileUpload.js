const DownloadPage = require('../pages/downloadPage');

describe('Upload', function () {
    const downloadPage = new DownloadPage();
    const url = 'https://the-internet.herokuapp.com/upload';
    const nameFile = 'test.txt';
    const path = __dirname + '/' + nameFile;

    it('upload file', async () => {
        await browser.get(url);
        await downloadPage.downloadFile(path);

        const statusFile = await downloadPage.checkDownloadFile(nameFile);
        expect(statusFile).to.equal(true);
    });
});
