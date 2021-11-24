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
        return this.hitlist;
    }

    public ArrayList<point> getDrawlist() {
        int lastr=-1;
        ArrayList<point> drawlist = new ArrayList<>();

        if(this.hitlist.size()>0) lastr=this.hitlist.get(this.hitlist.size()-1).getR();
        for(point shot : this.hitlist){
            if(shot.getR()==lastr){
                drawlist.add(shot);
            }
        }
        return drawlist;
    }
}
