const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	await fs.promises.writeFile(fileName,fileContent)
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	// write code here
	const fileContent = await fs.promises.readFile(fileName,'utf-8');
	// dont chnage function name
	return fileContent;
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	await fs.promises.writeFile(fileName, fileContent);
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	await fs.promises.unlink(fileName);
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
