package danandla;

import java.util.ArrayList;
import java.util.List;

public class TableBean {
    private ArrayList<point> hitlist = new ArrayList<>();

    public TableBean(){

    }

    public void setHitlist(ArrayList<point> hitlist) {
        this.hitlist = hitlist;
    }

    public void addpoint(point newpoint){
        this.hitlist.add(newpoint);
    }

    public ArrayList<point> getHitlist() {
        return hitlist;
    }
}
