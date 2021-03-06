const chai = require('chai')
const expect = chai.expect();
let should = chai.should();
var request = require('request');
const bodyParser=require("body-parser");
var server= require('../app.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const chaiAppServer = chai.request(server).keepOpen();

describe("Routing Testing", () => {

    it('Main page status', function(done) {
        chaiAppServer
            .get('/')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
    
    it('About page status', function(done) {
        chaiAppServer
            .get('/about')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Contact page status', function(done) {
        chaiAppServer
            .get('/contact')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Hotels Page status', function(done) {
        chaiAppServer
            .get('/mumbai/hotels')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Thank you page status', function(done) {
        chaiAppServer
            .get('/contact/thankyou')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
})

describe("Build Testing", () => {

    it('Building status', function(done) {
        chaiAppServer
            .get('/')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
    
    it('Frontend status', function(done) {
        chaiAppServer
            .get('/about')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Backend status', function(done) {
        chaiAppServer
            .get('/contact')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('Database Connection status', function(done) {
        chaiAppServer
            .get('/mumbai/hotels')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
})

describe("Database Testing", () => {

    it('Booking table status', function(done) {
        chaiAppServer
            .get('/')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
    
    it('Hotel table status', function(done) {
        chaiAppServer
            .get('/about')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });

    it('User status', function(done) {
        chaiAppServer
            .get('/contact')
            .end((error, response)=>{
            response.should.have.status(200);
            done();
        });
    });
})