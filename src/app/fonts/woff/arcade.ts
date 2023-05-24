const arcade =
	'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';

export { arcade };
