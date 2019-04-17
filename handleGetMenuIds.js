class handleGetMenuIds {
  static getMenuIDs(req, res) {
    // const { menuIDs } = req.body;
    res.status(200).json({ message: 'succesful' });
  }
}

export default handleGetMenuIds;
