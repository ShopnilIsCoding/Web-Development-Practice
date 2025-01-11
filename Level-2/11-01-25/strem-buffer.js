const http=require('http')
const fs=require('fs')

// creating server with raw http 

const server = http.createServer();

server.on('request',(req,res)=>
{
    console.log(req.url,req.method);
    if(req.url==='/api' && req.method==='GET')
    {
       
       
       const readableStream= fs.createReadStream(process.cwd()+'/bulk.txt')
       readableStream.on('data',(chunk)=>
    {
        res.write(chunk)
    })
    readableStream.on('end',()=>
    {
        res.end('hello api!')
    })

    readableStream.on('error', (error) => {
        console.log(error);
        res.statusCode = 500;
        res.end('Something went wrong!')
    })

    return;
    }
    res.end('hello world!')
   
})

server.listen(5000,()=>
{
    console.log('Server is running on port 5000')
})