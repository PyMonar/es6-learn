
 >  babel [file]
 >  
 >  将文件编译到另一个文件
 >  babel [file] -o/--out-file [file]
 >  
 >  将文件夹编译到另一文件夹
 >  babel [folder] -d/--out-dir [folder]
 >  
 >  使用babel需要先下载预设或者插件，然后再.babelrc配置文件中进行配置之后才能进行正常转码。
 >  
 >  babel默认只负责转码ES6的语法，新的API则不作转换。
 >  
 >  如果希望转换新的API需要使用babel-polyfill，为当前环境提供一个垫片。
 > 
 >  如果使用babel-node启动，则不需要显示引入polyfill，否则会报错。
 > 
 >  babel-runtime用于缓存babel生成的中间代码，这样保持生成代码的简洁性。