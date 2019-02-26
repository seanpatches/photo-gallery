const test = QUnit.test;

const images = {
    title: 'UniWhal', 
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

function createHtmlTemplate(images){
    `
    <li>
        <p>UniWhal</p>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;
}

test('create html template for list items', function(assert){
    //arrange
    const expected = `
    <li>
        <p>UniWhal</p>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;

    //act
    const result = createHtmlTemplate(images);
    //assert
    assert.equal(result, expected);
});