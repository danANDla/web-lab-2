package danandla;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        float x = Float.parseFloat(req.getParameter("xval"));
        int y = Integer.parseInt(req.getParameter("yval"));
        int r = Integer.parseInt(req.getParameter("rval"));

        HttpSession session = req.getSession();
        TableBean restable = (TableBean) session.getAttribute("table");
        restable.addpoint(new point(x,y,r,hit(x,y,r)));
        RequestDispatcher reqDispatcher = req.getRequestDispatcher("result.jsp");
        reqDispatcher.forward(req, resp);
    }

    private boolean hit(float x, int y, int r) {
        float epsilon = 0.000000001f;

        boolean inSquare = false;
        boolean inTriangle = false;
        boolean inCircle = false;

        if ((x < r || Math.abs(x - r) <= epsilon) && (x > 0 || Math.abs(x) <= epsilon)
                && (y < r || Math.abs(y - r) <= epsilon) && (y > 0 || Math.abs(y) <= epsilon)) {
            inSquare = true;
        }
        if((x<-r || Math.abs(x-(-r))<=epsilon) && (x<0 || Math.abs(x)<=epsilon)
                && (y<(0.5f*(x+r))|| Math.abs(y-(0.5f*(x+r)))<=epsilon) && (y>0 || Math.abs(y)<=epsilon)){
            inTriangle = true;
        }
        if ((r >= x*x+y*y || Math.abs(r - x*x+y*y) <= epsilon)
                && (x < 0 || Math.abs(x) <= epsilon) && (y < 0 || Math.abs(y) <= epsilon)) {
            inCircle = true;
        }
        return inSquare || inTriangle || inCircle;
    }
}
