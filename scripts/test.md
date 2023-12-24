# PSET 1: Kinematics

Link to PSET: [https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset1_new/](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset1_new/)

This is a straightforward kinematics problem.

## Part A: Finding kinematic equations for the car

Take the integral of the acceleration to get the velocity.

$$
v_c =
\begin{cases}
v_0 & 0 < t < t_1 \\
v_0-c(\frac{1}{2}t^2 - t_1 t + \frac{1}{2}t_1^2) & t_1 < t < t_2
\end{cases}
$$

And take the integral of the velocity to get the position.

$$
x_c =
\begin{cases}
v_0 t & 0 < t < t_1 \\
v_0 t -c(\frac{1}{6}t^3 - \frac{1}{2}t_1 t^2 + \frac{1}{2}t_1^2 t +\frac{1}{6}t_1^3)
 & t_1 < t < t_2
\end{cases}
$$

## Part B: Find the speed of the bicycle

We know the car's velocity must become zero at $t_2$ which is exactly when the cyclist reaches the car,
so we know after $t_2$ seconds, the cyclist has reached the car.

We must find the cyclist's position as a function of time, which will have $v_b$ in it, and set it equal to the car's position at $t_2$ to find $v_b$.
