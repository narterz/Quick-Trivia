import { useNavigate } from 'react-router';

function Results({ grade }) {
    const navigate = useNavigate();

    const gradeColor = () => {
        if (grade >= 90) {
            return '#00ff22'
        } else if (grade >= 80 && grade < 90) {
            return '#c8ff00'
        } else if (grade >= 70 && grade < 80) {
            return '#fbff00'
        } else if (grade >= 60 && grade < 60) {
            return '#ffa600'
        } else {
            return '#ff1100'
        };
    }

    const onMainMenu = () => {
        navigate('/');
    }

    return (
        <>
            <h1>Trivia Completed!</h1>
            <h3>Score: <span style={{ color: gradeColor() }}>{grade + '%'}</span></h3>
            <button 
                onClick={onMainMenu}
                className='btn-sm'>Main Menu
            </button>
        </>
        
    );
}

export default Results;
