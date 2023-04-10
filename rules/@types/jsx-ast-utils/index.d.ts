declare module "jsx-ast-utils" {
	function hasProp(
		props: any[],
		prop: string,
		options?: {
			spreadStrict: boolean;
			ignoreCase: boolean;
		}
	): boolean;
}
