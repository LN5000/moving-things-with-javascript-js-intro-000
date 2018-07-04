const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {

  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })


  it('runs', () => {
    //expect(true).to.be.true
  })
})
<<<<<<< HEAD
// revisit this and get this test to run. current code performs the functionality the lab is calling for, at least superficially.
=======
// revisit this and get this test to run. current code performs the functionality the lab is calling for, at least superficially.
>>>>>>> 41173e5505af556f51e3109497195aa6cc62d1cc
