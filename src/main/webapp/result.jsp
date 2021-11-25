<%@ page import="danandla.TableBean" %>
<%@ page import="danandla.point" %>
<%@ page import="java.util.ArrayList" %><%--
  Created by IntelliJ IDEA.
  User: dan20
  Date: 19.11.2021
  Time: 16:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/result.css">
    <title>lab 2</title>
</head>
<body>
<div class="box">
    <section class="hero">
        <div class="image">
<%--            <div class="parent-svg-container">--%>
<%--                <div class="svg-container"><canvas id="responsive-canvas"></canvas></div>--%>
<%--            </div>--%>
<%--            <script>resultinit();</script>--%>
        </div>
        <jsp:useBean id="table" class="danandla.TableBean" scope="session"/>
        <%
            ArrayList<point> pointslist = table.getHitlist();
            int size = pointslist.size();
            point shot = pointslist.get(size-1);
            String color = shot.getHitColor();
        %>
        <div class="not-image" style="background: <%=color%>">
            <div class="btns-block">
                <form action="ControllerServlet">
                    <div class="submit-btn"><input type="submit" value="back to form" id="submit-btn"></div>
                </form>
            </div>
            <div class="data-block">
                <div class="x-val">X:&nbsp&nbsp&nbsp <%=shot.getX()%></div>
                <div class="y-val">Y:&nbsp&nbsp&nbsp <%=shot.getY()%></div>
                <div class="r-val">R:&nbsp&nbsp&nbsp <%=shot.getR()%></div>
            </div>
        </div>
    </section>

    <section class="footer">

    </section>
</div>

</body>
</html>
