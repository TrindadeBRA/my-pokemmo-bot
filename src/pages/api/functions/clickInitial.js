import robot from 'robotjs';

export default function clickInitial() {
    try {
        const { x, y } = robot.getMousePos();

        const startX = 100;
        const startY = 100;

        robot.moveMouse(startX, startY);
        robot.mouseClick();
        
        return { message: "Initial click." };
    } catch (error) {
        console.error(error);
        throw new Error('Error. clickInitial()');
    } 
}