
const packageJson=require('./package.json')
module.exports={
    commonChunks:[],//从first.js和second.js中抽取commons chunk
    constantExtend:{
        '__BUILDVERSION__':JSON.stringify(`release: ${packageJson.name}-${packageJson.version}`),
        '__RELEASESDATE__': JSON.stringify( new Date().toLocaleString() ),
        '__APPKEY__':JSON.stringify('62a8bcfa-8278-4d1a-a49f-ea3ea287ccca'),
        '__APPSECRET__':JSON.stringify('pvjkjs')
    }
}