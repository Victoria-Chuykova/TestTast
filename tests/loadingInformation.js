const LoadingPage = require('../pages/loadingPage');

describe('Dynamic loading', function () {
    const loadingPage = new LoadingPage();
    const url = 'https://the-internet.herokuapp.com/dynamic_loading/';

    it('Element on page that is hiddenнад', async () => {
        await browser.get(url + '1');
        await loadingPage.loadingInformation();

        const resultLoading = await loadingPage.getLoadedInformation();
        expect(resultLoading).to.equal('Hello World!');
    });

    it('Element rendered after the fact', async () => {
        await browser.get(url + '2');
        await loadingPage.loadingInformation();

        const statusResultLoading = await loadingPage.isPresentStatusLoadingInformation();
        expect(statusResultLoading).to.equal(true);

        const resultLoading = await loadingPage.getLoadedInformation();
        expect(resultLoading).to.equal('Hello World!');
    });
});