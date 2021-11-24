<%@ page import="danandla.point" %>
<%@ page import="java.util.ArrayList" %><%--
  Created by IntelliJ IDEA.
  User: dan20
  Date: 12.11.2021
  Time: 0:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en"  xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/main.css">
    <title>lab 2</title>
    <script type="text/javascript" src="js/canvas.js"></script>
</head>
<body>
<div class="box">
    <section class="header">
        <span> Алексеев Даниил </span> P3233 <br>
        вар. 33407
    </section>

    <section class="hero">
        <table class="contentTable">
            <tr>
                <td class="imageCell">
                    <div class="parent-svg-container" >
                        <div class="svg-container"><canvas id="responsive-canvas"></canvas></div>
                    </div>
                    <script>init();</script>
                </td>
                <td rowspan="2" class="responseCell">
                    <div class="table-container">
                        <table class="resultTable">
                            <thead>
                            <tr>
                                <td class="res-table-X-clmn">X</td>
                                <td class="res-table-Y-clmn">Y</td>
                                <td class="res-table-R-clmn">R</td>
                            </tr>
                            </thead>
                            <tbody id="result-table-body">
                            <%if(request.getSession().getAttribute("table")!=null){%>
                                <jsp:useBean id="table" class="danandla.TableBean" scope="session"/>
                                    <%ArrayList<point> pointslist = table.getHitlist();
                                    ArrayList<point> drawlist = table.getDrawlist();%>
                                    <%for(point shot : pointslist){%>
                                        <tr class="ishit-<%=shot.isHit()%>">
                                            <td class="res-table-X-clmn"><%=String.format("%.4f", shot.getX())%></td>
                                            <td class="res-table-X-clmn"><%=String.format("%.4f", shot.getY())%></td>
                                            <td class="res-table-X-clmn"><%=shot.getR()%></td>
                                        </tr>
                                    <%}%>
                                    <%for(point shot : drawlist){%>
                                        <script>coord(<%=String.valueOf(shot.getX())%>, <%=String.valueOf(shot.getY())%>, <%=String.valueOf(shot.getR())%>, <%=String.valueOf(shot.isHit())%>);</script>
                                    <%}%>
                            <%}%>
                            </tbody>
                        </table>
                    </div>
                    <%String servlstmsg = (String) request.getAttribute("validation");
                    if(servlstmsg != null){%>
                        <div class="msgFromServlet"><span><%=servlstmsg%></span></div>
                    <%}%>
                </td>
            </tr>
            <tr>
                <td class="formCell">
                    <form method="get">
                        <div class="input">
                            <div class="input-invite"><label for="x-input" id="x-invite">type X</label></div>
                            <div class="input-field">
                                <input type="text" class="x-input-val" id="x-input" placeholder="-3...3" maxlength="10" required>
                                <div class="input-error" id="x-err"></div>
                            </div>
                        </div>
                        <div class="input">
                            <div class="input-invite"><label for="y-input"  id="y-invite">choose Y</label></div>
                            <div class="input-field">
                                <select id="y-input" name="y-input-val">
                                    <option disabled selected value> </option>
                                    <option value="-4">-4</option>
                                    <option value="-3">-3</option>
                                    <option value="-2">-2</option>
                                    <option value="-1">-1</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div class="input">
                            <div class="input-invite"  id="r-invite">choose R</div>
                            <div class="input-checkbox-field">
                                <div class="checkboxgroup"> <label for="R-1">1</label> <input type="radio" name="r-input" class="R-input" id="R-1" value="1"> </div>
                                <div class="checkboxgroup"> <label for="R-2">2</label> <input type="radio" name="r-input" class="R-input" id="R-2" value="2"> </div>
                                <div class="checkboxgroup"> <label for="R-3">3</label> <input type="radio" name="r-input" class="R-input" id="R-3" value="3"> </div>
                                <div class="checkboxgroup"> <label for="R-4">4</label> <input type="radio" name="r-input" class="R-input" id="R-4" value="4"> </div>
                                <div class="checkboxgroup"> <label for="R-5">5</label> <input type="radio" name="r-input" class="R-input" id="R-5" value="5"> </div> <br>
                            </div>
                        </div>

                        <div class="btns">
                            <div class="main-btns-block">
                                <div class="submit-btn"><input type="button" value="send" id="submit-btn"></div>
                                <div class="reset-btn"><input type="button" value="reset" id="reset-btn"></div>
                            </div>
                            <div class="appart-btns-block">
                                <div class="clear-btn"><input type="button" value="clear table" id="clear-btn"></div>
                            </div>
                        </div>
                    </form>
                </td>
            </tr>
        </table>
    </section>

    <section class="footer">

    </section>
</div>
</body>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</html>