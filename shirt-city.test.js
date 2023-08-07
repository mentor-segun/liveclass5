/* 
 * This file contains tests that check whether your solution in index.html is correct.
 * Run the tests with `pnpm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const { queries } = require('@testing-library/dom');
require("html-validate/jest");
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('Checking shirt-city/index.html to have required HTML elements.', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
  });



  test(w(2, 'uses the h2 heading'), function () {
    queries.getAllByRole(document, 'heading' , { level: 2 })[0]
  });

  test(w(2, 'uses the appropriate image'), function () {
    let imageElement = queries.getByRole(document, 'img');
    let imageElementSrc =  imageElement.getAttribute('src');
    expect(imageElementSrc).toBe('shirt.png');
  });


  test(w(2, 'uses the  paragraph element for first line'), function () {
    let pElement = queries.getByText(document, /We are very excited/)
    expect(pElement.tagName.toLowerCase()).toBe('p')
  });

  test(w(2, 'uses the  paragraph element for second line'), function () {
    // /queries.getByText("shirt") 
    let pElement = queries.getByText(document, /shirt city/)
    expect(pElement.tagName.toLowerCase()).toBe('p')
    // expect(paragraphList.length).toBeGreaterThanOrEqual(2);
  });


  // test(w(1, 'uses at least one image element'), function () {
  //   queries.getAllByRole(document, 'img')
  // });

  test(w(2, 'shirt index.html is a valid html doc'), function () {
    expect(html).toHTMLValidate();
  })
})

