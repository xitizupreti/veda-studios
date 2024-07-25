'use client';

interface ButtonProps {
    text: string;
}
const Button = ({ text }: ButtonProps) => {
    return (
        <>
            <button
                style={{
                    width: '110px',
                    height: '56px',
                    //   textAlign: "center",
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    margin: '8px 8px 0 0',
                    color: 'rgba(10, 1, 23, 1)',
                    border: '1px solid rgba(230, 230, 230, 1)',
                }}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
