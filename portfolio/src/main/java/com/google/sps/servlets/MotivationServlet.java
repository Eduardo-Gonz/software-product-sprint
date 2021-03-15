package com.google.sps.servlets;

import java.io.IOException;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /motivation URL. Try running a server and navigating to /motivation! */
@WebServlet("/motivation")
public class MotivationServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    String[] quotes = {"With no pain, there is no gain", "Success is where preparation and opportunity meet",
                        "It is what is is", "The secret of getting ahead is getting started"};

    Gson gson = new Gson();
    String json = gson.toJson(quotes);

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}