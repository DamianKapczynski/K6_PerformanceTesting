import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}': ['p(95)<1000'],
        'http_req_duration{status:201}': ['p(95)<1000']
    }
}

export default function () {
    http.get('https://run.mocky.io/v3/d910cf2d-f10d-4232-8c19-56da28c4e0d8');
    http.get('https://run.mocky.io/v3/aa5fa0f4-baca-4cb5-a709-dd4c3969f705?mocky-delay=2000ms');
}