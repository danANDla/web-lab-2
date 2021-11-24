package danandla;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String x = req.getParameter("xval");
        String y = req.getParameter("yval");
        String r = req.getParameter("rval");
        if(x == null && y == null && r == null){
            //req.setAttribute("validation", "All values are null");
            RequestDispatcher reqDispatcher = req.getRequestDispatcher("form.jsp");
            reqDispatcher.forward(req, resp);
        }
        else if(validate(x, y, r)){
            if(req.getSession().getAttribute("table") == null){
                HttpSession session = req.getSession();
                TableBean restable = new TableBean();
                session.setAttribute("table", restable);
            }
            RequestDispatcher reqDispatcher = req.getRequestDispatcher("AreaCheckServlet");
            reqDispatcher.forward(req, resp);
        }
        else{
            //RequestDispatcher reqDispatcher = req.getRequestDispatcher("form.jsp");
            //reqDispatcher.forward(req, resp);
            //.sendRedirect("ControllerServlet");
            resp.getWriter().write("invalid values");
        }
    }

    private boolean validate(String x, String y, String r){
        boolean xflag = false;
        boolean yflag = false;
        boolean rflag = false;
        if(x==null || y==null || r==null){
            ;
        }
        else{
            if(!x.matches("-?0{1}(\\.0+)?")&&(x.matches("-?[0-2]{1}(\\.\\d+)?") || x.matches("-?3{1}")) ){
                xflag = true;
            }
            if(y.matches("-?4{1}") || y.matches("-?3{1}") || y.matches("-?2{1}") || y.matches("-?1{1}") || y.matches("0{1}")){
                yflag = true;
            }
            if(r.matches("[1-5]{1}")){
                rflag = true;
            }
        }
        return xflag && yflag && rflag;
    }
}
