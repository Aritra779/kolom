const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const textCheck = (target, requiredField = false, minimumLength = 0, maximumLength = Infinity) => {
	let flag = true;
	if (target.value.length >= minimumLength && target.value.length <= maximumLength) {
		target.classList.remove('is-invalid');
		target.classList.add('is-valid');
		flag = true;
	}
	else if (target.value.length < minimumLength || target.value.length > maximumLength) {
		target.classList.remove('is-valid');
		target.classList.add('is-invalid');
		flag = false;
	}
	if (target.value.length === 0 && !requiredField) {
		target.classList.remove('is-invalid');
		target.classList.remove('is-valid');
		flag = true;
    }
	return flag;
}

const numberCheck = (target, requiredField = false, minimumValue = Number.NEGATIVE_INFINITY, maximumValue = Number.POSITIVE_INFINITY) => {
	let flag = true;
	if (target.value < minimumValue || target.value > maximumValue) {
		target.classList.remove('is-valid');
		target.classList.add('is-invalid');
		flag = false;
	}
	else if (target.value >= minimumValue && target.value <= maximumValue) {
		target.classList.remove('is-invalid');
		target.classList.add('is-valid');
		flag = true;
	}
	if (target.value.length === 0 && !requiredField) {
		target.classList.remove('is-invalid');
		target.classList.remove('is-valid');
		flag = true;
    }
	return flag;
}

const emailCheck = (target, requiredField = false) => {
	let flag = true;
	if (target.value.match(mailformat) && target.classList.contains('is-invalid')) {
		target.classList.remove('is-invalid');
		target.classList.add('is-valid');
		flag = true;
	}
	else if (!target.value.match(mailformat) && target.classList.contains('is-valid')) {
		target.classList.remove('is-valid');
		target.classList.add('is-invalid');
		flag = false;
	}
	else if (!target.value.match(mailformat)) {
		target.classList.add('is-invalid');
		flag = false;
    }
	if (target.value.length === 0 && !requiredField) {
		target.classList.remove("is-valid");
		target.classList.remove("is-invalid");
		flag = true;
    }
	return flag;
}


const passwordCheck = (status,target) => {
	let flag = true;
	if (status.length === 0 && target.classList.contains('is-invalid')) {
		target.classList.remove('is-invalid');
		target.classList.add('is-valid');
		flag = true;
	}
	else if (status.length !== 0 && target.classList.contains('is-valid')) {
		target.classList.remove('is-valid');
		target.classList.add('is-invalid');
		flag = false;
	}
	else if (status.length !== 0) {
		target.classList.add('is-invalid');
		flag = false;
	}
	return flag;
}

const imageCheck = (target) => {
	let flag = true;
	if (target.files[0].type.startsWith("image") && target.classList.contains("is-invalid")) {
		target.classList.remove("is-invalid");
		target.classList.add("is-valid");
		flag = true;
	}
	else if (!target.files[0].type.startsWith("image") && target.classList.contains("is-valid")) {
		target.classList.remove("is-valid");
		target.classList.add("is-invalid");
		flag = false;
	}
	return flag;
}


export { textCheck, numberCheck, emailCheck, passwordCheck, imageCheck };

