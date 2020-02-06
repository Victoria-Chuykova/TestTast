const FramePage = require('../pages/framePage');

describe('Nested frames', function () {

    const framePage = new FramePage();
    const url = 'https://the-internet.herokuapp.com/nested_frames';

    it('Testing Iframe', async () => {
        await browser.get(url);
        await framePage.switchToFrame(framePage.topFrame);
        await framePage.switchToFrame(framePage.leftFrame);
        const contentLeftFrame = await framePage.getBodyIframe();
        expect(contentLeftFrame).to.equal('LEFT');

        await browser.switchTo().defaultContent();
        await framePage.switchToFrame(framePage.topFrame);
        await framePage.switchToFrame(framePage.middleFrame);
        const contentMiddleFrame = await helpers.getTextByLocator(framePage.contentMiddleFrame);
        expect(contentMiddleFrame).to.equal('MIDDLE');

        await browser.switchTo().defaultContent();
        await framePage.switchToFrame(framePage.topFrame);
        await framePage.switchToFrame(framePage.rightFrame);
        const contentRightFrame = await framePage.getBodyIframe();
        expect(contentRightFrame).to.equal('RIGHT');

        await browser.switchTo().defaultContent();
        await framePage.switchToFrame(framePage.bottomFrame);
        const contentBottomFrame = await framePage.getBodyIframe();
        expect(contentBottomFrame).to.equal('BOTTOM');
    });
});