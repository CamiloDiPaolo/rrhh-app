const error = {
	input:
		'col-span-2 justify-center items-center w-full h-64 rounded-lg border-2  border-dashed cursor-pointer bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500',
	message: 'block text-red-600 dark:text-red-500 mb-2 text-sm font-medium'
};

const predet = {
	input:
		'col-span-2 focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
	message: 'hidden'
};

const factoryValidators = (type: string | null = null) => {
	return (value: any) => {
		let message = '';
		if (value === '' || value === 'null') message = 'Debe completar este campo';
		if (type == 'email' && !/[@.]/.test(value)) message = 'No se cumple el formato de email';
		if (type == 'emailInst' && !/[@.]/.test(value) && value.endsWith('@gba.gob.ar'))
			message = 'No se cumple el formato de email Institucional';
		if (message)
			return {
				message,
				status: false
			};

		return {
			message: '',
			status: true
		};
	};
};

const validateFilesAndImages = (file: File, extensions: Array<string>): Boolean => {
	console.log(file);
	return extensions.some((str) => file.name.toLowerCase().endsWith(str));
};

const validateEmptyInput = factoryValidators();
const validateInputEmail = factoryValidators('email');
const validateInputEmailInstitucional = factoryValidators('emailInst');

export { validateEmptyInput, validateInputEmailInstitucional, validateInputEmail };
