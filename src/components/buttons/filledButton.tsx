interface filledButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const FilledButton: React.FC<filledButtonProps> = ({ children, onClick }) => {


	return (
		<button
			style={{
				backgroundColor: '#6200ea',
				color: 'white',
				border: 'none',
				padding: '10px 20px',
				borderRadius: '4px',
				cursor: 'pointer',
				fontSize: '16px',
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
export default FilledButton;