import FastifyCookie from '@fastify/cookie';
import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', (_request, response) => {
    response.header('x-example-header', '...');
    return { hello: 'world' };
})

fastify.register(FastifyCookie);
