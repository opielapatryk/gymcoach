<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Gym Coach</title>
</head>
<body>
    <section>
        <h1>Siema
            Welcome On Gym Coach.. <br>
            &nbsp;&nbsp;&nbsp; Your Virtual Training Planner! <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please Sing In!
            Or Log In Here -> <button class="log-in"><a href="./login.php"><h1>Log In</h1></a></button>
        </h1>
        <form action="./main.php" method="POST">
            <input type="email" id="email" placeholder="Email"><br>
            <input type="password" id="password" placeholder="Password"><br>
            <input type="submit" value="Log In">
        </form>
    </section>
    <script src="./app.js" defer></script>
</body>
</html>