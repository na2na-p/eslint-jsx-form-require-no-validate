declare module "jsx-ast-utils" {
	function hasProp(
		props: ReadonlyArray<any>,
		prop: string,
		options?: {
			spreadStrict: boolean;
			ignoreCase: boolean;
		}
	): boolean;
}
